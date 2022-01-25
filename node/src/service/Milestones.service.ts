import {getConnection, getManager} from "typeorm";
import {Response, Request} from "express";
import { Milestones } from '../model/entity/Milestone';
import { StructureFORupdate } from '../interface/test.interface';

///////--------GET ALL MILESTONES DETAIL---------/////////


export const getMilestones = async(req: Request, res: Response) =>{
    try{
        let getmanager = getManager();
        let Data = await getmanager.find(Milestones); 
        console.log(Data);
        res.status(200).send(Data);
    }
    catch(error: any){
        console.log(error.message);
        res.status(400).send(error.message);
    }
    
    }
    
    
export const createMILESTONE = async(req: Request, res: Response) => {

    console.log(req.body)

    let newData = new Milestones();
    newData.title = req.body.title;
    newData.content = req.body.content;


    try{
        let manager = getManager();
        await manager.save(newData);
        console.log("data saved successfuly");
        res.status(200).send("POST: Data Saved");
        console.log(newData)
    }
    catch(error: any){
        console.log("error: ", error.message);
        res.status(400).send(error.message);
    }
}

export const updateMILESTONE = async(req: Request, res: Response) => {
    let manager = getManager();
    try{
        let updatedmilestone = await manager.findOne(Milestones,
            {
                title : req.body.title,
            });
        if(updatedmilestone === undefined){
            throw new Error("Data Doesn't Exist");
        }

        updatedmilestone.title = req.body.title;
        updatedmilestone.content = req.body.content;

        await manager.save(updatedmilestone);


        console.log("Data Updated successfully");
        res.status(200).send("Data Updated");
    }
    catch(error: any){
        res.status(400).send(error.message);
        console.log(error.message);
    }
}
export const UpdateMILESTONES = async function(req: Request, res: Response){

    const receivedData: StructureFORupdate = req.body;
    const milestonesData = receivedData.Milestone;


    let manager = getManager();
    try{
        let milestone = await manager.findOne(Milestones, {title: milestonesData.title});
        if(milestone === undefined){
            throw new Error("no data found");
        }
        milestone.content = milestonesData.content;

        await manager.save(milestone);
 

        res.status(200).send("data updated");
        console.log("data updated");

    }
    catch(error: any){
        console.log(error.message);
        res.status(400).send(error.message);
    }

}

export const deleteMILESTONE = async(req: Request, res: Response) => {
    let manager = getManager();
    try{
        let deletemilestone = await manager.find(Milestones,
            {

                 milestone_id: req.body.id,

            });
        if(deletemilestone === undefined){
            throw new Error("Data Doesn't Exist,yes");
        }
        await manager.remove(deletemilestone)
        .then(
            () => {
                console.log("deleted the applicant data")
                res.status(200).json({ 
                    title: req.body.title,
                    content: req.body.content,
                   
                });
                res.status(200).send("deleted the data");
            }
        )
        .catch(err => {console.log(err.message)})
    }
    catch(error: any){
       console.log(error.message);
       res.status(200).send(error.message);
    }
}


export const deleteMilestones = async (req: Request, res: Response, next: any) => {
    try {
      const data = await getConnection()
        .createQueryBuilder()
        .update(Milestones)
        .set({
            title : '' ,
            content:''
           
          })
        .where({ milestone_id: req.body.id })
        .execute();
      res.status(200).json({ data });
    } catch (error:any) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
  };

  