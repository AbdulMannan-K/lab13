const request = require("supertest");
const app = require("./routes/User");
const mongoose = require('mongoose');

describe("Test the root path",()=>{
    test("it shoudl response the GET method",()=>{
        const response = request(app).post('http://localhost:8000/User/add').send({
            "Name":"Obaid",
            "Email":"obaid",
            "Age":12,
            "Contact":123,
        })
        expect((response.statusCode)).toBe(200);
    })
})

describe("Test the del path",()=>{
    test("it should response the DEL method",()=>{
        const response = request(app).delete('http://localhost:8000/User/342542432');
        expect((response.statusCode)).toBe(200);
    })
})

describe("Test the root path with username",()=>{
    test("it should response the GET method",()=>{
        const response = request(app).post('http://localhost:8000/User/add').send({
            "Name":"Obaid",
        })
        expect((response.statusCode)).toBe(200);
    })
})