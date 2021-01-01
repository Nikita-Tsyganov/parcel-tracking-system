const Parcel = require("../models/Parcel.js");

const ParcelsController = {
  // @desc Get All Parcels
  all: (req, res) => {
    Parcel.findAll().then(parcels => res.json(parcels));
  },

  // @desc Get A Single Parcel
  find: (req, res) => {
    Parcel.findOne({ where: { id: req.params.id } }).then(parcel => res.json(parcel));
  },

  // @desc Create A Parcel
  create: (req, res) => {
    new Parcel({
      title: req.body.title
    })
      .save()
      .then(parcel => res.json(parcel));
  },

  update: (req, res) => { 

     Parcel.findOne({ where: { id: req.params.id } });
    
    Parcel.update(
  
    { title: req.body.title },
  
    // Where clause / criteria 
           { id : req.params.id }     
  
   )
  },
  delete: (req, res) => { 

    Parcel.findOne({ where: { id: req.params.id } });
    
    Parcel.destroy(
    // Where clause / criteria 
           { id : req.params.id}     
  
   )
  },
   
  

  // @desc Update A Parcel
  /* update: (req, res) => {
    Parcel.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        completed: req.body.completed
      },
      {
        new: true
      }
    ).then(parcel => res.json(parcel));
  }, 

  // @desc Delete A Parcel
  delete: (req, res) => {
    Parcel.findByIdAndRemove(req.params.id).then(parcel => res.json(parcel));
  } */
};

module.exports = parcelsController;
