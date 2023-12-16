export default {
    name: "custom_table",
    title: "Custom Table ",
    type: "object",
    fields: [{
      name: "custom_table",
    title: "Custom Table ",
    type: "table",
    }],
    preview: {
        prepare:()=>{
            return{
          title:"Custom Table"}
        }
      }
}

