class YoloBlock {
    getInfo() {
        return {
            "id": "YoloBlock",
            "name": "YoloBlock",
            "blocks": [
                {
                "opcode": "string_in",
                "blockType": "reporter",
                "text": "string [string1] in [string2]",
                "arguments": {
                    "string1": {
                        "type": "string",
                        "defaultValue": "an",
                    },
                    "string2": {
                        "type": "string",
                        "defaultValue": "banana", //monke
                    },
                },
            },
            ],
            "menus": {}
        };
    };
    string_in({string1,string2}){
        return (temp.match(/`string2`/g) || []).length;
    };
};
Scratch.extensions.register(new YoloBlock());
