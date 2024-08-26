const sourceConfigs = [
    {
        database: "edgered-lab",
        schemas: [{
            schema: "demo_bronze",
            tables: [
                "payments",
                "clients"
            ]
            },

        ]
    }
];

sourceConfigs.forEach(({ database, schemas }) => {
    schemas.forEach(({ schema, tables }) => {
        tables.forEach(name => {
            declare({
                database,
                schema,
                name
            });
        });
    });
});