import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
  HttpCode,
  Query,
} from '@nestjs/common';
import { BeneficiaryService } from './beneficiary.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';

@Controller('beneficiary')
export class BeneficiaryController {
  constructor(private readonly beneficiaryService: BeneficiaryService) {}

  @Post('/create')
  create(@Body() createBeneficiaryDto: CreateBeneficiaryDto) {
    return this.beneficiaryService.createBeneficiary(createBeneficiaryDto);
  }

  @Get('/all')
  findAllBeneficiary() {
    return this.beneficiaryService.findAllBeneficiary();
  }

  @Get(':id/find')
  findOneBeneficiary(@Param('id') id: string) {
    return this.beneficiaryService.findOneBeneficiary(id);
  }

  @Patch(':id/update-beneficiary')
  updateDonator(
    @Param('id') id: string,
    @Body() updateBeneficiaryDto: UpdateBeneficiaryDto,
  ) {
    return this.beneficiaryService.updateBeneficiary(id, updateBeneficiaryDto);
  }

  @Get('/search-beneficiary')
  async findByLetter(@Query('letter') letter: string) {
    return this.beneficiaryService.searchBeneficiary(letter);
  }

  @Delete(':id/remove-beneficiary')
  removeBeneficiary(@Param('id') id: string) {
    return this.beneficiaryService.removeBeneficiary(id);
  }
}
