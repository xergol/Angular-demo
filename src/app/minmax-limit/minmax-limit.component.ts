import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from '../app.component';

@Component({
  selector: 'app-minmax-limit',
  templateUrl: './minmax-limit.component.html',
  styleUrls: ['./minmax-limit.component.css']
})
export class MinmaxLimitComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<MinmaxLimitComponent>,
    @Inject(MAT_DIALOG_DATA) public inputOptions: PeriodicElement) { }

  model: any = {};
  ngOnInit() {
  }

  make_selection() {
    this.dialogRef.close(this.model);
  }
}
