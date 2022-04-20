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
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "carName"
            }
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
            title: "Car Description",
            name: "carDescription",
            type: "text"
        },
        {
            title: "Default Showcar",
            name: "showImage",
            type: "image"
        },
        {
            title: "Types of cars",
            name: "typesOfCars",
            type: "array",
            of: [{
                title: "Car Type",
                name: "carType",
                type: "object",
                fields: [
                    {
                        title: "Car Model Name",
                        name: "carTypeName",
                        type: "string"
                    },
                    {
                        title: "Color",
                        name: "color",
                        type: "object",
                        fields: [
                            {
                                title: "Color",
                                name: "color",
                                type: "reference",
                                to: [{
                                    type: "colors"
                                }]
                            },
                            {
                                title: "Paint Price $",
                                name: "colorPrice",
                                type: "number"
                            }
                        ]
                    },
                    {
                        title: "Models",
                        name: "models",
                        type: "object",
                        fields: [
                            {
                                title: "Model Types",
                                name: "modelTypes",
                                type: "reference",
                                to: [{
                                    type: "cartypes"
                                }]
                            },
                            {
                                title: "Model Range (WLTP) (km)",
                                name: "carRange",
                                type: "number"
                            },
                            {
                                title: "Model Top Speed (kmh)",
                                name: "carTopSpeed",
                                type: "number"
                            },
                            {
                                title: "0-100 (seconds) (kmh)",
                                name: "carTorque",
                                type: "number"
                            },
                            {
                                title: "Model Price $",
                                name: "carTypePrice",
                                type: "number"
                            }
                        ]
                    },
                    {
                        title: "Car image",
                        name: "carImage",
                        type: "image"
                    }
                ]
            }]
        },
        {
            title: "Car features",
            name: "carFeatures",
            type: "array",
            of: [
                {
                    title: "Car feature",
                    name: "carFeature",
                    type: "object",
                    fields: [
                        {
                            title: "Feature name",
                            name: "carFeatureName",
                            type: "string"
                        },
                        {
                            title: "Feature",
                            name: "feature",
                            type: "reference",
                            to: [{
                                type: "features"
                            }]
                        },
                        {
                            title: "Top Specific performance numbers",
                            name: "topSpecPerf",
                            type: "string",
                        }
                    ]
                }]
        },
        {
            title: "Starts at price $",
            name: "price",
            type: "number"
        }
    ],
    initialValue: {
        available: false
    }
}