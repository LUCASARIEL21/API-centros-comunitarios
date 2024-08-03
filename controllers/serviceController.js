const { Service: ServiceModel } = require("../models/Service.js");

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        adress: req.body.adress,
        location: req.body.location,
        currentPeople: req.body.currentPeople,
        maxPeople: req.body.maxPeople,
        doctors: req.body.doctors,
        volunteers: req.body.volunteers,
        vehicles: req.body.vehicles,
        kits: req.body.kits,
        basicBasket: req.body.basicBasket,
      };

      const response = await ServiceModel.create(service);

      res.status(201).json({ response, msg: "Serviço criado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      res.json(services);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);

      if (!service) {
        res.status(404).json({
          msg: "Service não encontrado",
        });
        return;
      }

      res.json(service);
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;

    const service = {
      currentPeople: req.body.currentPeople,
      doctors: req.body.doctors,
      volunteers: req.body.volunteers,
      vehicles: req.body.vehicles,
      kits: req.body.kits,
      basicBasket: req.body.basicBasket,
    };

    const updateService = await ServiceModel.findByIdAndUpdate(id, service);

    if (!updateService) {
      res.status(404).json({
        msg: "Service não encontrado",
      });
      return;
    }
    res.status(200).json({ service, msg: "Serviço atualizado" });
  },
};

module.exports = serviceController;
