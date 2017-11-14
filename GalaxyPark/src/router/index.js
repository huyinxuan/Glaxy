import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Hello.vue'
import CentralAir from '@/components/CentralAir.vue'
import ColdMachine from '@/components/ColdMachine.vue'
import UserVav from '@/components/UserVav.vue'
import FreshAirSys from '@/components/freshAirSys.vue'
import DewateringSys from '@/components/DewateringSys.vue'
import DistributionSys from '@/components/DistributionSys.vue'
import LightingSys from '@/components/LightingSys.vue'
import MonitoringSys from '@/components/MonitoringSys.vue'
import FireControlSys from '@/components/FireControlSys.vue'
import EnergyConSys from '@/components/EnergyConSys.vue'
import ElevatorSys from '@/components/ElevatorSys.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/centralAir',
      name: 'centralAir',
      component: CentralAir
    },
    {
      path: '/coldMachine',
      name: 'coldMachine',
      component: ColdMachine
    },
    {
      path: '/userVav',
      name: 'userVav',
      component: UserVav
    },
    {
      path: '/freshAirSys',
      name: 'freshAirSys',
      component: FreshAirSys
    },
    {
      path: '/dewateringSys',
      name: 'dewateringSys',
      component: DewateringSys
    },
    {
      path: '/distributionSys',
      name: 'distributionSys',
      component: DistributionSys
    },
    {
      path: '/lightingSys',
      name: 'lightingSys',
      component: LightingSys
    },
    {
      path: '/monitoringSys',
      name: 'monitoringSys',
      component: MonitoringSys
    },{
      path: '/fireControlSys',
      name: 'fireControlSys',
      component: FireControlSys
    },{    
      path: '/energyConSys',
      name: 'energyConSys',
      component: EnergyConSys
    },{
      path: '/elevatorSys',
      name: 'elevatorSys',
      component: ElevatorSys
    }
  ]
})
