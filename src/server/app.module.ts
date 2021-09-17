import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { ViewModule } from './modules/view/view.module'

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}) ,ViewModule],
  controllers: [],
  providers: []
})
export class AppModule {}