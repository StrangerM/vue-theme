 Vue.createApp(
   {
      data() {
         return {
            placeholder: "Add name of notice",
            title: "List of notice",
            inputValue: '',
            notes: [],
         }
       },
       methods: {
          addHandler() {
             if (this.inputValue !== '') {
               this.notes.push(this.inputValue);
             }
             
             this.inputValue = '';
          },
          inputHandler(event) {
             this.inputValue = event.target.value;
          },
          deleteNote(index) {
             this.notes.splice(index, 1);
          }
         
      }
   }
).mount("#app");

