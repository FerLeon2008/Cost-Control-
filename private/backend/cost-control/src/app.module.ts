import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewProductModule } from './new-product/new-product.module';
import { NewCostService } from './new-cost/new-cost.service';
import { NewCostController } from './new-cost/new-cost.controller';
import { NewCostModule } from './new-cost/new-cost.module';

@Module({
  imports: [NewProductModule, NewCostModule],
  controllers: [AppController, NewCostController],
  providers: [AppService, NewCostService],
})
export class AppModule {}
