export default {
    title: "Cars",
    name: "cars",
    type: "document",
    fields: [
        {
            title: "Available",
            name: "available",
            type: "boolean"
        },
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
            title: "Color",
            name: "color",
            type: "reference",
            to: [{
                type: "colors"
            }]
        },
        {
            title: "Car image",
            name: "carImage",
            type: "image"
        },
        {
            title: "Price $",
            name: "price",
            type: "number"
        }
    ],
    initialValue: {
        available: false
      }
}