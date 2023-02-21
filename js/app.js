const { createApp } = Vue; //Vue
//App
createApp({
    //Dati
    data() {
      return {
        //Tasks
        tasks: [
            {
                text: "Svuotare l'armadio", //testo
                done: true //task svolta
            },
            {
                text: "Pulire l'armadio", //testo
                done: true //task svolta
            },
            {
                text: "Riorganizzare l'armadio", //testo
                done: false //task svolta
            },
            {
                text: "Rimettere tutto nell'armadio", //testo
                done: false //task svolta
            },
            {
                text: "Dare via i vestiti che non si usano più", //testo
                done: false //task svolta
            }
        ],
        inputTask: "" //task in input
      }
    },
    //Metodi
    methods: {
        //Metodo per cancellare una task
        deleteTask(i) {
            this.tasks.splice(i, 1); //cancello la task
        },
        //Metodo per aggiungere una task
        addTask() {
            //Nuova task
            const newTask = {
                text: this.inputTask, //testo
                done: false //task svolta
            }
            this.tasks.push(newTask); //inserisco la task nuova nell'array di task
        }
    }
}).mount('#app');