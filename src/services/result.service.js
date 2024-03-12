import {
  NotFoundException,
  ConflictException,
} from "../exceptions/http-exceptions";
import ResultModel from "../models/result.model";

export class ResultService {
  constructor() {
    this.resultModel = ResultModel;
  }

  async createResult(resultData) {
    try {
      const result = await this.resultModel.create(resultData);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getResultById(resultId) {
    try {
      const result = await this.resultModel.findById(resultId);
      if (!result) {
        throw new NotFoundException(`Result with ID ${resultId} not found`);
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAllResults(searchString) {
    try {
      let query = {};
      if (searchString) {
        query = {
          /* Define your search criteria here */
        };
      }
      const results = await this.resultModel.find(query);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async updateResult(resultId, updatedData) {
    try {
      const result = await this.getResultById(resultId);
      const updatedResult = await this.resultModel.findByIdAndUpdate(
        result._id,
        updatedData,
        { new: true }
      );
      return updatedResult;
    } catch (error) {
      throw error;
    }
  }

  async deleteResult(resultId) {
    try {
      const result = await this.getResultById(resultId);
      await this.resultModel.findByIdAndDelete(result._id);
    } catch (error) {
      throw error;
    }
  }
}
