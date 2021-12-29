export interface StructureOF
{
 Achievement: {
        achievement_name: string,
        content: string,
        date: string
    },
    SubAchievement: {
            sub_achievement_name: string ,
            content: string,
        }[],
    Milestone :{
            title: string,
            content: string,
    }[]
}

