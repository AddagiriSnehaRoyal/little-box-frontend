const DB_NAME = "littleBoxDB";
const DB_VERSION = 1;
const STORE_NAME = "packages";

/*
=========================================
OPEN DATABASE
=========================================
*/

const openDatabase = () => {
    return new Promise((resolve, reject) => {

        const request = indexedDB.open(
            DB_NAME,
            DB_VERSION
        );

        request.onupgradeneeded = (event) => {

            const db = event.target.result;

            if (
                !db.objectStoreNames.contains(
                    STORE_NAME
                )
            ) {
                db.createObjectStore(
                    STORE_NAME,
                    {
                        keyPath: "id"
                    }
                );
            }
        };

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = () => {
            reject(request.error);
        };

    });
};


/*
=========================================
SAVE PACKAGE
=========================================
*/

export const savePackage = async (
    packageId,
    packageData
) => {

    const db = await openDatabase();

    return new Promise(
        (resolve, reject) => {

            const transaction =
                db.transaction(
                    STORE_NAME,
                    "readwrite"
                );

            const store =
                transaction.objectStore(
                    STORE_NAME
                );

            /*
             * IMPORTANT:
             * Always store ID as a string.
             */

            const id = String(packageId);

            const request = store.put({

                id: id,

                data: packageData

            });

            request.onsuccess = () => {
                resolve(true);
            };

            request.onerror = () => {
                reject(request.error);
            };

        }
    );
};


/*
=========================================
GET PACKAGE
=========================================
*/

export const getPackage = async (
    packageId
) => {

    const db = await openDatabase();

    return new Promise(
        (resolve, reject) => {

            const transaction =
                db.transaction(
                    STORE_NAME,
                    "readonly"
                );

            const store =
                transaction.objectStore(
                    STORE_NAME
                );

            /*
             * IMPORTANT:
             * URL parameter is converted
             * to string before searching.
             */

            const id = String(packageId);

            const request =
                store.get(id);

            request.onsuccess = () => {

                if (!request.result) {

                    console.log(
                        "Package not found:",
                        id
                    );

                    resolve(null);

                    return;
                }

                const packageData =
                    request.result.data;

                /*
                ==================================
                RECREATE VIDEO URL
                ==================================
                */

                if (
                    packageData.contents
                ) {

                    packageData.contents =
                        packageData.contents.map(
                            (content) => {

                                if (
                                    content.type === "video" &&
                                    content.file
                                ) {

                                    const videoUrl =
                                        URL.createObjectURL(
                                            content.file
                                        );

                                    return {
                                        ...content,
                                        videoUrl
                                    };
                                }

                                return content;

                            }
                        );

                }

                resolve(packageData);

            };

            request.onerror = () => {

                reject(
                    request.error
                );

            };

        }
    );
};