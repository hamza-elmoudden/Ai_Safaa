


export enum Skin_type {
  dry='dry',
  oily='oily',
  combination='combination',
  normal='normal',
  sensitive='sensitive'
}

export class SkinProfile{
    constructor(
        public readonly id:string,
        public readonly user_id:string,
        public readonly skin_type:Skin_type,
        public readonly concerns:string[],
        public readonly allergies:string[],
        public readonly notes:string,
        public readonly created_at:Date,
        public readonly updated_at:Date
    ){}
}