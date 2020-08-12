import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlaylistService} from '@shared/services/playlist.service';
import {Playlist} from '@shared/models/playlist';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-playlist-dialog',
  templateUrl: './create-playlist-dialog.component.html',
  styleUrls: ['./create-playlist-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePlaylistDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreatePlaylistDialogComponent>,
    private playlistService: PlaylistService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    }, {updateOn: 'submit'});

    this.dialogRef.afterClosed().subscribe(value => {
      const playlist: Playlist = this.form.value;
      playlist.userId = 1;
      this.playlistService.save(playlist).subscribe(value1 => {
        this.snackBar.open('Çalma listesi oluşturuldu');
      });
    });
  }

}
