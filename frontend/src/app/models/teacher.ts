export class Teacher {

    _id: String;
    name: String;
    subname: String;
    area: String;
    salary: Number;

    constructor(_id='' , name='' , subname='' , area='', salary=0){
        this._id=_id;
        this.name=name;
        this.subname=subname;
        this.area=area;
        this.salary=salary;
    }
}
