ngx-cron-editor
===

An Angular 8 component for building cron expressions graphically. It is meant
to be used in reactive forms and support Angular Material Design styling.

Additional to the fork of haavardj I added ngx-translate to the project.
 
## Demo

A work-in-progress demo can be found [here](https://haavardj.github.io/ngx-cron-editor/)
(This demo is for the old version without translation)

## Usage

1. Install the npm package:
    ```
    $ npm i ngx-cron-editor-translate -S
    ```

2. Import the module in your own module:

    ```ts
    import { CronEditorModule } from 'ngx-cron-editor-translate';

    @NgModule({
        imports: [..., CronEditorModule],
    ...
    })
    export class MyModule {
    }
    ```

3. Setup the FormControl in you component's typescript file:
   
   ```ts
   ngOnInit(): void {
     this.cronForm = new FormControl('0 0 1/1 * *');
   }
   ```
   
4. Include the component in your html code:

    ```html
    <cron-editor [formControl]="cronForm"></cron-editor>
    ```
   
   or use the `formControlName='...'` directive if your form controller
   lives in a FormGroup.

## Options

```html
<cron-editor [formControl]="cronForm" [options]="cronOptions"></cron-editor>
```

```ts
import { CronOptions } from 'ngx-cron-editor-translate';

@Component({
    ...
})
export class MyComponent {
   public cronOptions: CronOptions = {
       defaultTime: "00:00:00",

       hideMinutesTab: false,
       hideHourlyTab: false,
       hideDailyTab: false,
       hideWeeklyTab: false,
       hideMonthlyTab: false,
       hideYearlyTab: false,
       hideAdvancedTab: true,
       hideSpecificWeekDayTab: false,
       hideSpecificMonthWeekTab : false,

       use24HourTime: true,
       hideSeconds: false,

       cronFlavor: "quartz" //standard or quartz
       defaultLanguage: "en" // use en or de for translation
  };
}
```

## History

The ngx-cron-editor is a fork of the vincentjames501's [angular-cron-gen](https://github.com/vincentjames501/angular-cron-gen) for AngularJS 1.5+ and claudiuconstantin's [cron-editor](https://github.com/claudiuconstantin/cron-editor).
The ngx-cron-editor-translate is a fork of haavardj's [ngx-cron-editor](https://github.com/haavardj/ngx-cron-editor) for Angular 8+ support and material design

**The main additions of this fork is support for ngx-translate.**


## License:
Licensed under the MIT license
