export class PinsComponent{

    constructor(
         private repository: RepositoryService,
         private snackBar: MatSnackBar,
         private pinsServices: PinsService,
         private formBuilder: FormBuilder
    ){

    }

    public openUrl(URL: string): void {
        window.open(URL,'_blank');
    }
}