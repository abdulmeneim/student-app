const students = require("./student");
const yargs = require("yargs")
yargs.command({
    command: "add",
    describe: "Add student",
    builder: {
        id: {
            describe: "id for student",
            demandOption: true,
            type: "number",
        },
        name: {
            describe: "student name",
            demandOption: true,
            type: "string",
        },
        degres: {
            describe: "student degres ",
            demandOption: true,
            type: "array",
        },
        comment: {
            describe: "student degres ",
            demandOption: false,
            type: "string",
        },
    },
    handler: (stud_data) => {
        let sum = 0
        stud_data.degres.forEach(element => {
            sum += element;
        });

        console.log(stud_data.degres, sum);
        students.addstudent(stud_data.id, stud_data.name, sum, stud_data.comment);
    },
});
yargs.command({
    command: "delete",
    describe: "Delete student",
    builder: {
        id: {
            describe: "student id to delete",
            demandOption: true,
            type: "number"
        },
    },
    handler: (x) => {
        students.deletestudent(x.id);
    },
});
yargs.command({
    command: "list",
    describe: "List all students",
    handler: () => {
        students.liststudents();
    },
});
yargs.command({
    command: "read",
    describe: "Read student",
    builder: {
        id: {
            describe: "student id to read",
            demandOption: true,
            type: "number",
        },
    },
    handler: (x) => {
        students.readstudent(x.id);
    },
})
yargs.parse()