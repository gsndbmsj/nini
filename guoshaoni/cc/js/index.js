new Vue({
    el:"#root",
    data:{
        list:[
            {id:1,title:"aaa"},
            {id:2,title:"bbb"},
            {id:3,title:"ccc"},
        ],
        title:"",
        state:false
    },
    methods:{
        aa(){
            this.state = true;
        },
        bb(val){
            this.title = val;
            this.state = false;
        }
    }
})