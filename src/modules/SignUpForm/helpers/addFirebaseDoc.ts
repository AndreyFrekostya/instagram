import { addDoc, collection, Firestore, getFirestore} from "firebase/firestore"; 
import { getStorage, ref, getDownloadURL,FirebaseStorage } from "firebase/storage";
import { setUser } from "pages/signup/slices/UserSlice";
import { useAppDispatch } from "hooks/hooksRedux";
import { useAuth } from "hooks/useAuth";
import { getApp } from "firebase/app";
type IaddDoc={
    (db:Firestore, storage: FirebaseStorage,data:{email: string, name: string, id: string, nick: string, dispatch:any}):void
}
export const addFirebaseDoc:IaddDoc=(db, storage, data)=>{
    let URL=''
    getDownloadURL(ref(storage, 'defaultAva.jpg'))
    .then(async(url) => {
        URL=url
        console.log(URL)
        data.dispatch(setUser({
            email: data.email,
            name: data.name,
            nick: data.nick,
            id: data.id,
            ava: url
          }))
        try {
            console.log(URL)
            const docRef = await addDoc(collection(db, "users"), {
                email: data.email,
                name: data.name,
                nick: data.nick,
                id: data.id,
                ava: URL
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    })
    .catch((error) => {
        console.log('error, image doesn`t download!')
    });
}