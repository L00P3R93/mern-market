import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/user.controller'
import auctionCtrl from '../controllers/auction.controller'

const router = express.Router()

router.route('/api/auctions').get()