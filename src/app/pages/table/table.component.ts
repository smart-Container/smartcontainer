import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public containers: any ;
    public dataRows : Array<any>;

    ngOnInit(){
        this.containers = {
            headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],

        };
       this.dataRows= [
            ['1', 'yass ameny', 'Niger', 'tunisa', 'none',true],
            ['1', 'yass ameny', 'Niger', 'tunisa', 'none',false],
            ['1', 'yass ameny', 'Niger', 'tunisa', 'none',"working"],
            ['1', 'yass ameny', 'Niger', 'tunisa', 'none',"working"],
            ['1', 'yass ameny', 'Niger', 'tunisa', 'none',"working"],

            
        ]
        console.log(this.dataRows[1][2])


    }
}
