

export class CompleteLoginCommand {
  constructor(
    public id: string,
    public full_name: string,
    public phone: string,
    public country_code: string,
    public city: string,
    public date_of_birth: Date,
  ) { }
} 