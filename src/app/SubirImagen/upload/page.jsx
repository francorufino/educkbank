"use client";
import { storage } from "../../../lib/firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function SubirImagen() {
  const handleInput = async e => {
    const refStorage = ref(storage, "imagen");
    const fileSnapshot = await uploadBytes(refStorage, e.target.files[0]);
    const fileUrl = await getDownloadURL(fileSnapshot.ref);
    alert(fileUrl);
  };
  return (
    <section>
      <input type="file" onChange={handleInput} />
    </section>
  );

  //to upload multiple images:
  // const handleInput = async e => {
  //   e.target.files.forEach(async img => {
  //     const refStorage = ref(storage, img.name);
  //     const fileSnapshot = await uploadBytes(refStorage, img);
  //     const fileUrl = await getDownloadURL(fileSnapshot.ref);
  //     alert(fileUrl);
  //   });

  //    };
  //   return (
  //     <section>
  //       <input type="file" multiple onChange={handleInput} />
  //           <input type="file" multiple="multiple" onChange={handleInput} />
  //     </section>
  //   );
  // }
  // MAAAAASSS... LOGICO Q DEU ERRO, O PROFESSOR NAO MOSTROU FUNCIONANDO... SO DISSE Q ERA ASSIM
}
