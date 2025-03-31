import { ErrorHandler, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{
    constructor(private snackbar:MatSnackBar){}

    handleError(error: any): void {
        console.error("Global Error Caught", error);

        this.snackbar.open("Error from snackbar: Unexpected error occured!", "close", {
            duration:3000,
            panelClass:["error-snackbar"],
        });
    }
}