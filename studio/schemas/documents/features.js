export default {
    title: "Features",
    name: "features",
    type: "document",
    fields: [
        {
            title: "feature name",
            name: "featureName",
            type: "string",
            validation: Rule => Rule.required().min(3).max(40)
        },
        {
            title: "Feature Icon",
            name: "featureIcon",
            type: "image",
            options: {
                
            }
        }
    ]
}