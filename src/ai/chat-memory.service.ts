


export class ChatMemoryService{

    private userMessages = new Map<string , Array<any>>()


    saveMessage(userId:string,message:any){

        if(!this.userMessages.has(userId)){
            this.userMessages.set(userId,[])
        }

        this.userMessages.get(userId)?.push(message)
    }

    getMessages(userId:string){
        return this.userMessages.get(userId) || []
    }
}