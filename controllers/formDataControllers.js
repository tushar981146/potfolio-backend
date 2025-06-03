const formData = require('../models/formDataModel');
const mongoose = require('mongoose');

const giveFormData = async (req, res) => {
    const allData = await formData.find();
    res.status(200).json(allData);
    console.log("Data sent successfully");
}


const addFormData = async (req, res) => {
    console.log(req.body);

    const { firstName, lastName, mail, phoneNumber, discription } = req.body;

    formItems = new formData({
        firstName: firstName,
        lastName: lastName,
        mail: mail,
        phoneNumber: phoneNumber,
        discription: discription
    });

    await formItems.save().then(() => {
        return res.status(200).json({ message: "Data added successfully" });
    }).catch((err) => {
        console.log("Error while adding data: ", err);
        return res.status(500).json({ message: "Error while adding data" });
    });
}

const uniqueId = async (req, res) => {
    const group = {};
    try {
        const data = await formData.find();
        const value = [...data];
        const text = value.map((datas) => {
            const key = datas.firstName + '-' + datas.lastName;
            if (!group[key]) {
                group[key] = [];
            }
            group[key].push(datas._id);

        });

        const result = Object.entries(group).map(([key, value]) => ({ [key]: value }));
        return res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const specificMsg = async (req, res) => {
    const { value } = req.body;

    const result =[];
    for(const item of value) {
        console.log("Item: ", item);

        try {
            const data = await formData.findById(item);
            if (!data) {
                return res.status(404).json({ message: 'Data not found' });
            }
            console.log("Data: ", data);
             result.push(data);
            
        } catch (error) {
            console.error('Error fetching specific data:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    };

    return res.status(200).json(result);
}




module.exports = {
    giveFormData,
    addFormData,
    uniqueId,
    specificMsg,
};

