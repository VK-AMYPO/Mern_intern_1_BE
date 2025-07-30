var database = require("../model/user.model")

const postUser = async (req, res) => {
    try {
        const newEntry = req.body; //object
        const existingemail = database.find((ele) => {
            return ele.email === newEntry.email
        })
        if (existingemail) {
            return res.status(400).send({ message: "The email already exists...." })
        }
        const data = database.push(newEntry);
        res.status(201).send({ message: "Data Added...", result: database })
    } catch (err) {
        res.status(500).send({ message: "Data Not Added...", result: err })
    }
}

const getData = async (req, res) => {
    try {
        res.status(200).send({ message: "Data Getted", result: database })
        console.log(database)

    } catch (err) {
        res.status(500).send({ message: "Data not getted...", result: err })
    }
}

const getDataById = async (req, res) => {
    try {
        const { id } = req.params; //10 ,//undefined

        if (!id || isNaN(id)) { 
            return res.status(400).send({ message: "Invalid ID format" });
        }
        const existingdata = database.find((ele) => {
            return ele.id === Number(id)
        })
        if (!existingdata) {
            return res.status(400).send({ message: "Id could not found" })
        }
        
        res.status(200).send({ message: "Data Getted", result: existingdata })

    } catch (err) {
        res.status(500).send({ message: "Data not getted...", result: err })
    }
}
const updateData = async (req, res) => {
    try {
        const { id } = req.params;
        const updateddata = req.body; //
        const index = database.findIndex((ele) => ele.id === Number(id)) // 3===4 =-1

        if (index === -1) {
            return res.status(404).send({ message: "User ID not found" });
        }
        //  database[index]=updateddata  //patch
        database.splice(index, 1, updateddata)//0 ,1,update put
        console.log(database)

        res.status(200).send({ message: "Data updated", result: database })

    } catch (err) {
        res.status(500).send({ message: "Data not updated...", result: err })
    }
}

const deleteData = async (req, res) => {
    try {
        const { id } = req.params;//vinoth 1
        const index = database.findIndex((ele) => {
            return ele.id === Number(id)
        })
        if (index === -1) {
            return res.status(404).send({ message: "User ID not found" });
        }
        database.splice(index, 1);
        console.log(database)
        return res.status(200).send({ message: "deleted successfully", result: database })

    } catch (err) {
        res.status(500).send({ message: "Data not deleted...", result: err })
    }
}

module.exports = { postUser, getData, getDataById, updateData, deleteData }
