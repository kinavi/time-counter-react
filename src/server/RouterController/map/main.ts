import { Request, Response } from 'express';
import { Views } from '../../ViewController';
import { Store } from '../../../client/redux/store';

export const timeManager = (req: Request, res: Response) => {
  res.send(Views.renderMainPage(Store, req.url));
};