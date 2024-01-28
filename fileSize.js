function fileSize(){
    const fs = require('fs')

    const filePath = 'example.txt'

    fs.stat(filePath, (err, stats) => {
        if(err){
            console.log('Возникла ошибка при чтении файла', `"${filePath}"`, '\n', 'Ошибка:', err)
            return;
        }

        const fileSize = stats.size
        const fileSizeKB = fileSize / 1024

        console.log(`Размер файла: ${filePath} составляет: ${fileSizeKB} KB`)
    })
}
fileSize()