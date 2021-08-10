export enum socketEvents {
    welcome = 'welcome',
    insertDocument = 'insertDocument',
    deleteDocument = 'deleteDocument',
    replaceDocument = 'replaceDocument',
    updateField = 'updateField',
    removeField = 'removeField',
    truncateArrayField = 'truncateArrayField',
    collectionComplete = 'collectionComplete',
}