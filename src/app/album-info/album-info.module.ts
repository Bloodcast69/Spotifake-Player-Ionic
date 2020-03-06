import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {AlbumInfoPage} from './album-info.page';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: AlbumInfoPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [AlbumInfoPage],
    entryComponents: [AlbumInfoPage]
})
export class AlbumInfoPageModule {
}
