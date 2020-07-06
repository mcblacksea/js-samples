class BaseClass{
    constructor(){
        this.Name = "Base";
    }

    ShowClassName(){
        console.log(this.Name);
    }
}

class Secondary extends BaseClass{
    constructor(){
        super();
        this.Name = "Secondary";
        this.Layer = "Current";
    }

    ShowLayer(){
        console.log(this.Layer);
    }
}

const sec = new Secondary();
sec.ShowClassName();
sec.ShowLayer();
console.log(typeof sec);