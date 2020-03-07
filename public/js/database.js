const students =
{

    fakeDB : [],

    init()
    {

      this.fakeDB.push({id:`001`,firstName:`Robort`,lastName:`White`,studentNumber:`n0123451`,image:`../image/img/student/profiles/img01.png`,cover:`../image/img/student/covers/img1a.jpg`,program:`webdesign`});

      this.fakeDB.push({id:`001`,firstName:`Michael`,lastName:`Green`,studentNumber:`n0123452`,image:`../image/img/student/profiles/img01.png`,cover:`../image/img/student/covers/img1a.png`,program:`webdesign`});

      this.fakeDB.push({id:`001`,firstName:`Peter`,lastName:`Red`,studentNumber:`n0123453`,image:`../image/img/student/profiles/img01.png`,cover:`../image/img/student/covers/img2a.jpg`,program:`graphicdesign`});

      this.fakeDB.push({id:`001`,firstName:`David`,lastName:`Brown`,studentNumber:`n0123454`,image:`../image/img/student/profiles/img01.png`,cover:`../image/img/student/covers/img1a.jpg`,program:`graphicdesign`});

      this.fakeDB.push({id:`001`,firstName:`Louis`,lastName:`Black`,studentNumber:`n0123455`,image:`../image/img/student/profiles/img01.png`,cover:`../image/img/student/covers/img1a.png`,program:`3dmodeling`});

      this.fakeDB.push({id:`001`,firstName:`Luke`,lastName:`Grey`,studentNumber:`n0123456`,image:`../image/img/student/profiles/img01.png`,cover:`../image/img/student/covers/img2a.jpg`,program:`3dmodeling`});
    
     

    },

    getallStudents()
    {
      return this.fakeDB;
    }

}


students.init();
module.exports=students;