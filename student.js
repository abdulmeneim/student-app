const fs = require("fs")

const available_id = (allstudents, id) => {
    const matched = allstudents.find((student) => {
        return student.id === id
    })
    if (matched) {
        return false
    }
    return true
}
const loadstudet = () => {
    try {
        const students = fs.readFileSync("student.json").toString()
        return JSON.parse(students)
    }
    catch {
        return []
    }
}
const savestudent = (data) => {
    try {
        fs.writeFileSync("student.json", JSON.stringify(data))
    } catch (error) {
        console.log("error is " + error);
    }
}
const addstudent = (id, name, total_degres, comment) => {
    if (!id) {
        console.log(`invalid id => not a number   ${id}`);
        return
    }
    const allstudents = loadstudet()
    if (!available_id(allstudents, id)) {
        console.log("id already exists");
        return
    }
    const newstud = {
        id,
        name,
        total_degres,
        comment
    }
    allstudents.push(newstud)
    savestudent(allstudents)
}
const deletestudent = (id) => {
    if (!id) {
        console.log(`invalid id => not a number   ${id}`);
        return
    }
    const allstudents = loadstudet()
    if (available_id(allstudents, id)) {
        console.log(`id  not found or invaild`);
        return
    }
    const to_save = allstudents.filter((student) => {
        return student.id !== id
    })
    savestudent(to_save)
    console.log(`deleted id ${id}`);
}
const liststudents = () => {
    const allstudents = loadstudet()
    allstudents.forEach((student) => {
        console.log(student.id, student.name, student.total_degres, student.comment)
    })
}
const readstudent = (id) => {
    const allstudents = loadstudet()
    if (available_id(allstudents, id)) {
        console.log(`id  not found or invaild`);
        return
    }
    const match = allstudents.find((student) => {
        return student.id === id
    })
    console.log(match.id, match.name, match.total_degres, match.comment)
}
module.exports = {
    addstudent, deletestudent, liststudents, readstudent
}