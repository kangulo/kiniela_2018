import { Component, OnInit,Input } from '@angular/core';


import { PredictionGroup } from '../../../classes/PredictionGroup';

import { GroupsService } from "../../groups/groups.service";
import { GroupsPipe } from "../../../common/filters/groups.filter";
import { RemoveSpaceBetweenPipe } from "../../../common/filters/removewhitespacebetween.filter";

import { kconfig } from '../../../globals';

declare let $:any;

@Component({
  selector: 'app-predictiongroups',
  templateUrl: './predictiongroups.component.html',
  styleUrls: ['./predictiongroups.component.css']
})
export class PredictiongroupsComponent implements OnInit {
  @Input() serial: string = '';
  @Input() predictionGroupDetails: PredictionGroup;

  private teams: any;
  private groups: any;

  constructor(private _groupsService: GroupsService) { }

  ngOnInit() {

    this.getGroups();
    this.getTeams();

    $(document).on('click', '.group_selector', function(event){
      //event.preventDefault();
      
      var $this    = $(this);
      var group    = $this.data('group-name');
      var team     = null;
      var group_id = $this.data('group-id');
      var el_id    = $this.attr('id');
      var serial   = $this.data('serial-id');
      var first    = false;
      var second   = false;
      var value    = null;
      
      $('.'+group).each(function( index, value ) {
        if ($(value).hasClass('second selected'))
        {
          second = true;
        }
        if ($(value).hasClass('first selected'))
        {
          first = true;
        }
      });

      if (!second && !first) 
      {
        $this.addClass("first selected");
        $this.html("1");
        value = 1;
        team = $this.data('team-id');
      }
      else
      {
        if (!second && first) {
          if ($this.hasClass('selected'))
          {
            $this.removeClass('first selected');
            $this.html("");
            value = 1;            
          }
          else
          {
            $this.addClass("second selected");
            $this.html("2");
            value = 2;
            team = $this.data('team-id');
          }
        }
        else 
        {
          if (second && first && $this.hasClass('second selected')) {
              $this.removeClass('second selected');
              $this.html("");
              value = 2;
          }
          else
          {
            $('.'+group).each(function( index, value ) {
              $(value).removeClass('second selected');
              $(value).html("");
              $(value).removeClass('first selected');
            });
            $this.addClass("first selected");
            $this.html("1");
            value = 1;
            team = $this.data('team-id');
          }
        }
      }

      if ($this.hasClass('first selected'))
      {
        //alert(group_id + "" + value + "=" + team);
      }
      else if ($this.hasClass('second selected'))
      {
        //alert(group_id + "" + value + "=" + team);
      }
      else 
      {
        //alert(group_id + "" + value + "=" + team);
      }
      
      // Ajax call to save groups
      $.ajax({
          url: kconfig.apiUrl + "controller.predictions.php?accion=SavePredictionsGroup",
          type: "POST",
          data: {
              serial: serial,
              field: group_id + "" + value, 
              team:team
          },
          beforeSend: function() {				
            //jQuery('.gift-shop-main').html('<div class="loader"></div>');
          },
          success: function(data) {
            
          },
          complete: function () { 
                
          }
      });

    });
  }


  getTeams(){
    this._groupsService
    .getTeams()
    .subscribe(teams => {
      this.teams = teams;
    })
  }

  getGroups(){
    this._groupsService
    .getGroups()
    .subscribe(groups => {
      this.groups = groups;
    })
  }

  getGroupsBySerial(serial){
    // Ajax call to save groups
    $.ajax({
        url: kconfig.apiUrl + "controller.predictions.php?accion=GetPredictionGroupDetails",
        type: "POST",
        dataType: "json",
        data: {
            serial: serial
        },
        beforeSend: function() {				
          //jQuery('.gift-shop-main').html('<div class="loader"></div>');
        },
        success: function(data) {
          //clear all the value
          $('.group_selector').each(function( index, value ) {
            $(value).removeClass('second selected');
            $(value).html("");
            $(value).removeClass('first selected');
            console.log('cleaning');
          });
            $(data.data).each(function( index, value ) {
              // map new values.
              $.map( value, function( value, index ) {
                  var team  = value;
                  var group = index.substring(0, 1);
                  var place = index.substring(1, 2);
                  //console.log(value+ " "+ group + " " + place);
                  if (team > 0 && team != "")
                  {
                    if (place == 1)
                    {
                      $('*[data-team-id="'+team+'"]').addClass("first selected");
                      $('*[data-team-id="'+team+'"]').html("1")
                    }
                    else if (place == 2)
                    {
                      $('*[data-team-id="'+team+'"]').addClass("second selected");
                      $('*[data-team-id="'+team+'"]').html("2")
                    }
                  }
              });
              
              // var $this = $(value);
              // var id = $this.data('team-id');
              // console.log(id);
              // if (id == data.data.A1)
              // {
              //   $this.addClass("first selected");
              //   $this.html("1");
              // }
            });
        },
        complete: function () { 
              
        }
    });
  }



  /**
  *  Cancel Buton Function
  */
  ClickGroupSelector = () =>
  {
      $('#actionLabel').text('Add Projects');
      $('#save-button').text('Save Projects');
      $('#id').val('');
      $('#form-projects')[0].reset();
      $('.formData').slideUp();
  }


}
