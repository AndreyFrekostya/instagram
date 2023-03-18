
import { collection, DocumentData, DocumentSnapshot, Firestore, getDocs,SnapshotOptions } from "firebase/firestore"; 
type ValueDoc={
    ava: string | null,
    email: string | null,
    id: string | null, 
    name: string | null,
    nick: string | null
}

export const getDocUser=async(id:string,db:Firestore) =>{
    let Userdata:ValueDoc={ava: null, email: null, id: null, name: null, nick: null}
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc)=> {
        if(doc.data().id===id){
            Userdata.ava=doc.data().ava
            Userdata.email=doc.data().email
            Userdata.id=doc.data().id
            Userdata.name=doc.data().name
            Userdata.nick=doc.data().nick
        }  
    })
    return Userdata
}