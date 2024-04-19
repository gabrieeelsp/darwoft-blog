const cleanDocument = (document, removeAttr) => {
    const temp = document.toObject();

    removeAttr.forEach((attr) => {
        delete temp[attr];
    });

    return temp;
};

module.exports = cleanDocument;
