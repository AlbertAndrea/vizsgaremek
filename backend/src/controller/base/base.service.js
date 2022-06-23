module.exports = (model) => {
    return {
        findAll: () => model.find({}),
        findOne: (id) => model.findById(id),
        
        updateOne: async (id, body) => {
            const newEntity = new model(body);
            const error = newEntity.validateSync();
            if (!error) {
                return model.findByIdAndUpdate(id, body, {new: true})
            }
            throw new Error(error);
        },

        createOne: async (body) => {
            const newEntity = new model(body);
            const error = newEntity.validateSync();
            if (!error) {
              const saved = await newEntity.save();
              return model.findById(saved._id);
            }
            throw new Error(error);
          },
          
        deleteOne: (id) => model.findByIdAndRemove(id),
    };
};