import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { TimePickerComponent } from "./cron-time-picker.component";
import { CronGenComponent } from "./cron-editor.component";
import { HttpClientModule } from "@angular/common/http";
import { TranslateModule } from "@ngx-translate/core";
import { TranslateUiService } from "./translate-ui.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
    }),
  ],
  exports: [TimePickerComponent, CronGenComponent],
  declarations: [TimePickerComponent, CronGenComponent],
  providers: [TranslateUiService],
})
export class CronEditorModule {}
