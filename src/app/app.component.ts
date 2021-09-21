import { Component } from '@angular/core';
import { sampleData } from "./datasource";
import { PageSettingsModel , 
  SortSettingsModel, 
  FilterSettingsModel, 
  EditSettingsModel, 
  ToolbarItems } from "@syncfusion/ej2-angular-treegrid";
import { CommandModel } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit(): void {
    this.data = sampleData;
    this.pageSettings = { pageSize: 100 };
    this.pageSorting = {columns: [{ field: 'taskID', direction: 'Ascending' }, { field: 'taskName', direction: 'Ascending' }]};
   
    /* this.filterSetting = { 
      ignoreAccent: true, 
      hierarchyMode: "Parent",
      columns: [{ field: 'taskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Plann' },
      { field: 'duration', matchCase: false, operator: 'equal', predicate: 'and', value: 5 }]}
    */

    this.filterSetting = { ignoreAccent: true, hierarchyMode: "Parent", type:"Menu"}

    /* this.filterSetting = { ignoreAccent: true, hierarchyMode: "None", type:"CheckBox"}
     this.filterSetting = { ignoreAccent: true, hierarchyMode: "Both", type:"Menu"} */
  
    /* this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' }; */
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.commands = [
       {
         type: 'Edit',
         buttonOption: {iconCss: ' e-icons e-edit', cssClass: 'e-flat'}
       },
       {
         type: 'Delete',
         buttonOption: {iconCss: ' e-icons e-delete', cssClass: 'e-flat'}
       },
       {
         type: 'Save',
         buttonOption: {iconCss: ' e-icons e-update', cssClass: 'e-flat'}
       },
       {
       type: 'Cancel',
         buttonOption: {iconCss: ' e-icons e-cancel-icon', cssClass: 'e-flat'}
       }
     ];
 }

  title = 'TreeView';
  public data: Object[] = [];
  public pageSettings!: PageSettingsModel;
  public pageSorting!: SortSettingsModel;
  public filterSetting!: FilterSettingsModel;
  public editSettings!: EditSettingsModel;
  public toolbarOptions!: ToolbarItems[];
  public commands!: CommandModel[];
}
