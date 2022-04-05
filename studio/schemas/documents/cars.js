export default {
    title: "Cars",
    name: "cars",
    type: "document",
    fields: [
        {
            title: "Car name",
            name: "carName",
            type: "string"
        },
        {
            title: "Model year",
            name: "modelYear",
            type: "date",
            options: {
                dateFormat: "YYYY"
            }
        },
        {
            title: "Car image",
            name: "carImage",
            type: "image"
        }
    ]
}