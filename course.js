var Course={
    folderName:'NodeJS',
    fileName:'node.js',
}

function course(){
    const fs = require('fs')
    fs.mkdirSync(Course.folderName)

    const path = `${Course.folderName}/${Course.fileName}`

    fs.writeFile(path, JSON.stringify(Course), (err) => {
        if (err) {
            console.error('Ошибка при записи файла:', err);
        } else {
            console.log('Файлы', `"${Course.folderName}" и "${Course.fileName}"`, 'успешно созданы по указанному пути:', path);
        }
    });
}
course()
