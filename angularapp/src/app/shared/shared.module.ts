import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http],
            },
            isolate: false
        })
    ],
    exports: [
        CommonModule,
        TranslateModule
    ]
})
export class SharedModule {

    constructor(private translate: TranslateService) {

        translate.addLangs(["en", "si"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|si/) ? browserLang : 'en');
    }
}
